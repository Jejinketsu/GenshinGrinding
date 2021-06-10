import { throws } from 'assert/strict';
import S3 from 'aws-sdk/clients/s3';
import fs from 'fs';
import Fileinfo from '../interfaces/fileinfo';
import ParamsFormat from '../interfaces/S3UploadParams';

const service = new S3({
 accessKeyId: process.env.AWS_ACCESS_KEY_ID,
 secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const uploadS3 = (params: ParamsFormat) => new Promise((resolve, reject) => {
    service.upload(params, function(s3Err: Error, data: S3.ManagedUpload.SendData) {
        if(s3Err) reject(s3Err);
        else {
            resolve(data.Location);
        }
    });
})

export default {
    async uploadFile(filename: fs.PathLike, fileinfo: Fileinfo){
        const readedFile = fs.readFileSync(filename);

        const params = {
            Bucket: <string> process.env.BUCKET,
            Key: `${fileinfo.entity}/${fileinfo.id}/${fileinfo.type}`,
            Body: readedFile,
            ContentType: fileinfo.mime
        };

        const path = await uploadS3(params);

        fs.unlink(filename, (err) => {if(err) throw err});

        return path;
    }
}