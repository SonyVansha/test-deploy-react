// Border Profile Component
import { useState } from "react";
// https://placehold.co/1600x200
function BorderProfile() {
  // State for Pop Up and Profile Picture
  const [showPopup, setShowPopup] = useState(false);
  const [profilePic, setProfilePic] = useState('/images/profile/hutao.jpg');

  // Toggle Pop Up Functionality
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Select Profile Pic Functionality
  const selectProfilePic = (picUrl) => {
    setProfilePic(picUrl);
    setShowPopup(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            setProfilePic(e.target.result);
            setShowPopup(false);
        };
        reader.readAsDataURL(file);
    }
};

  return (
    <div className="bg-blue-700 h-48 relative">
      <img src='https://iili.io/2JUsmVS.th.jpg' alt="Profile Banner" className="w-full h-full object-cover"/>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <img src={profilePic} onClick={togglePopup} alt="Profile Picture" className="w-24 h-24 rounded-full border-4 border-white"/>
        <button onClick={togglePopup} className="absolute bottom-0 right-0 bg-gray-200 text-gray-700 p-1 rounded-full">
          <i className="fas fa-edit"></i>
        </button>
      </div>

      {/* Pop Up Profile */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-md shadow-md">
                <h2 className="text-lg font-bold mb-4">Pilih Foto Profil</h2>
                {/* Select Image */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <img src="/images/profile/hutao.jpg" alt="Profile option 1" className="cursor-pointer w-24 h-24 rounded-full" onClick={() => selectProfilePic('/images/profile/hutao.jpg')} />
                    <img src="/images/profile/nahida.jpg" alt="Profile option 1" className="cursor-pointer w-24 h-24 rounded-full" onClick={() => selectProfilePic('/images/profile/nahida.jpg')} />
                    <img src="/images/profile/yaemiko.jpg" alt="Profile option 2" className="cursor-pointer w-24 h-24 rounded-full" onClick={() => selectProfilePic('/images/profile/yaemiko.jpg')} />
                    <img src="/images/profile/ely.jpg" alt="Profile option 3" className="cursor-pointer w-24 h-24 rounded-full" onClick={() => selectProfilePic('/images/profile/ely.jpg')} />
                </div>
                {/* Input image */}
                <div className="mb-4">
                  <input type="file" onChange={handleFileUpload} className="block w-full text-sm text-gray-900 dark:text-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-200 dark:file:bg-gray-700 file:text-gray-700 dark:file:text-gray-200 hover:file:bg-gray-300 dark:hover:file:bg-gray-600" />
                </div>
                {/* Submit Image */}
                <div className="flex justify-end space-x-2">
                    <button onClick={togglePopup} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Batal</button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default BorderProfile;