const cloudName = "dpyd2gv0f";
const uploadPreset = "camera_unsigned";
const saveImgApi = "https://camera-app-745e7-default-rtdb.firebaseio.com/";

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const uploadedImage = document.getElementById("uploadedImage");
const imageUrlText = document.getElementById("imageUrl");

const overlay = document.getElementById("uploadOverlay");
const loader = document.getElementById("loader");
const check = document.getElementById("check");
const text = document.getElementById("uploadText");
let imageData = null;

// روشن کردن دوربین
async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    showToast("Camera started successfully!", "success");
  } catch (error) {
    showToast("Camera access denied or not available!", "error");
  }
}

// گرفتن عکس
function takePhoto() {
  if (!video.srcObject) {
    showToast("Start the camera first!", "error");
    return;
  }

  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  imageData = canvas.toDataURL("image/png");

  showToast("Photo captured successfully!", "success");
  uploadPhoto();
}

// آپلود به Cloudinary
async function uploadPhoto() {
  if (!imageData) {
    showToast("First take a photo!", "error");
    return;
  }

  try {
    showUploadingAnimation(); // ✅ شروع لودینگ

    const formData = new FormData();
    formData.append("file", imageData);
    formData.append("upload_preset", uploadPreset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    if (!response.ok) throw new Error("Upload failed");

    const data = await response.json();

    uploadedImage.src = data.secure_url;
    imageUrlText.innerText = data.secure_url;

    await saveDataLink(data.secure_url); // ⬅️ صبر می‌کنیم تا ذخیره کامل شود

    hideUploadingAnimation(); // ✅ پایان موفق

    showToast("Image uploaded successfully!", "success");
  } catch (error) {
    overlay.classList.add("hidden"); // ✅ بستن overlay در خطا
    showToast("Upload failed. Try again!", "error");
  }
}

const saveDataLink = async (link) => {
  try {
    const response = await fetch(`${saveImgApi}images.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: link, timestamp: Date.now() }),
    });

    if (!response.ok) throw new Error("Firebase error");

    showToast("Saved to database successfully!", "success");
  } catch (err) {
    overlay.classList.add("hidden"); // ✅ بستن overlay در خطا
    showToast("Error saving to database!", "error");
  }
};

function showUploadingAnimation() {
  overlay.classList.remove("hidden");

  loader.classList.remove("hide");
  check.classList.remove("show");

  text.innerText = "Saving photo...";
}

function hideUploadingAnimation() {
  loader.classList.add("hide");

  check.classList.add("show");

  text.innerText = "Saved";

  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 900);
}

function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");

  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.innerText = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
