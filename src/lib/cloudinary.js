// Cloudinary delivery helper (spec §9). Set VITE_CLOUDINARY_CLOUD_NAME once
// a cloud is provisioned; until then this returns null and callers fall back
// to a marked placeholder slot. Uses f_auto,q_auto for format/quality.
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "";

export function cloudinaryUrl(publicId, { width, transform = "f_auto,q_auto" } = {}) {
  if (!CLOUD_NAME || !publicId) return null;
  const sized = width ? `${transform},w_${width}` : transform;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${sized}/${publicId}`;
}
