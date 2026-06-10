import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (req, res) => {
  if (!req.file && !req.body.imageUrl) {
    return res.status(400).json({ message: 'Image file or imageUrl is required' });
  }

  if (req.body.imageUrl) {
    return res.status(200).json({ url: req.body.imageUrl });
  }

  const buffer = req.file.buffer;
  const uploadStream = cloudinary.uploader.upload_stream(
    { folder: 'restaurant-menu' },
    (error, result) => {
      if (error) {
        return res.status(500).json({ message: 'Cloudinary upload failed', error });
      }
      res.status(201).json({ url: result.secure_url, publicId: result.public_id });
    }
  );

  streamifier.createReadStream(buffer).pipe(uploadStream);
};
