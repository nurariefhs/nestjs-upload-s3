import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

const s3 = new AWS.S3();

@Injectable()
export class UploadService {

    async single(file: Express.Multer.File){
        const bucketPath = 'images'
        return await s3.upload({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Body: file.buffer,
            Key: `${bucketPath}/${file.originalname}`
        }).promise();
    }
}
