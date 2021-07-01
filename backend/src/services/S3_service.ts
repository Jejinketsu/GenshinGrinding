import S3 from 'aws-sdk/clients/s3';
import fs from 'fs';
import Fileinfo from '../interfaces/fileinfo';
import UploadParams from '../interfaces/S3UploadParams';

const service = new S3({
 accessKeyId: process.env.AWS_ACCESS_KEY_ID,
 secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const uploadS3 = (params: UploadParams): Promise<string> => new Promise((resolve, reject) => {
    service.upload(params, function(s3Err: Error, data: S3.ManagedUpload.SendData) {
        if(s3Err) reject(s3Err);
        else {
            resolve(data.Location);
        }
    });
});

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
    },

    async deleteFile(fileinfo: Fileinfo){
        const params = {
            Bucket: <string> process.env.BUCKET,
            Key: `${fileinfo.entity}/${fileinfo.id}/${fileinfo.type}`
        }

        service.deleteObject(params, function(s3err: Error, data) {
            if(s3err) throw s3err;
        });
    },

    async deleteFolder(folderinfo: Fileinfo) {
        const params = {
            Bucket: <string> process.env.BUCKET,
            Prefix: `${folderinfo.entity}/${folderinfo.id}/`
        }

        service.listObjects(params, function(s3err: Error, data){
            if(s3err) throw s3err;

            const params = {
                Bucket: <string> process.env.BUCKET,
                Delete: {Objects:[{}]}
            } as {Bucket: string, Delete: {Objects:[{Key: string}]}}

            params.Delete.Objects.pop();
            data.Contents?.forEach(function(content){
                params.Delete.Objects.push({Key: <string> content.Key});
            });

            service.deleteObjects(params, function(s3err: Error, data){
                if(s3err) throw s3err;
            });
        });
        
    }
}