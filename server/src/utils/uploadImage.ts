import cloudinary from "../config/cloudinary";
import { UploadApiResponse } from "cloudinary";

export const uploadImage = (
  buffer: Buffer
): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "smarttrade/products",
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result as UploadApiResponse);
          }
        }
      )
      .end(buffer);
  });
};