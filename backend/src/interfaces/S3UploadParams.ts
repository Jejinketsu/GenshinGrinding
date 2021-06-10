export default interface paramsFormat {
    Bucket: string,
    Key: string,
    Body: Buffer | ReadableStream | String,
    ContentType: string,
}