import { Controller, Get, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { Express } from "express";

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('single')
  @UseInterceptors(FileInterceptor('file'))
  async single(
    @UploadedFile() file: Express.Multer.File
  ){
    console.log(file)
    console.log(Array.isArray(file));
    // const upload = this.uploadService.singleUpload(file);
    // return upload
  }

  @Post('array')
  @UseInterceptors(FilesInterceptor('files'))
  async array(
    @UploadedFiles() files: Array<Express.Multer.File>
  ){
      // console.log(files);
      console.log(Array.isArray(files));
      const upload = this.uploadService.arrayUpload(files);
      return upload;
  }
}
