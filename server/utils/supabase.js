const { createClient } = require("@supabase/supabase-js");
const AppError = require("./appError");

const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL,
  process.env.SUPABASE_KEY
);

const uploadFiles = async (file) => {
  const imgRef = `${Date.now()}-${file.originalname}`;

  const { data, error } = await supabase.storage
    .from('imagesProducts')
    .upload(imgRef, file.buffer);

  if (error) {
    return new AppError(error, error.stack)
  } else {
    return data;
  }
};

module.exports = uploadFiles;