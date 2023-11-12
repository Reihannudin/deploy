import { useState } from "react";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

const TopBar = () => {
  return (
    <div className="flex items-center px-4 py-3 border-b">
      <Link to="/feed">
        <img className="w-6 mr-2" src="/assets/arrow-back.svg" />
      </Link>
      <i className="far fa-angle-left"></i> Tulis postingan
    </div>
  );
};

const BottomBar = ({storeFeed, isLoading}) => {
  return (
    <>
      <div className="border-t fixed bottom-10  mt-3 w-full px-4 py-3 left-0">
        <button className="bg-purple-600 hover:bg-purple-700 text-white w-full rounded py-2" disabled={isLoading} onClick={e => storeFeed()}>
          {isLoading ? "Memposting..." : "Posting"}
        </button>
      </div>
    </>
  );
};

export const FeedWriteComponent = ({storeFeed, setContent, isArchive, setIsArchive, isLoading}) => {
  const [imagePreview, setImagePreview] = useState("");
  const [handleFullScreen  , setHandleFullScreen] = useState(false);

  const toggleDropdownFullScreen = () => {
      setHandleFullScreen((prevHidden) => !prevHidden)
  }

    const handleFullScreenItemClick = () => {
        setHandleFullScreen(false);
    };


  const handleToggle = () => {
    setIsArchive(!isArchive);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
        {handleFullScreen && (
            <div id="drop-action" className="flex items-center justify-center w-full fixed h-full z-50  min-h-screen">
                {/* This div serves as a backdrop and should cover the entire screen */}
                <div onClick={handleFullScreenItemClick} className="bg-gray-400 bg-opacity-40 w-full h-full z-40 absolute bottom-2"></div>

                {/* Centered dropdown content */}
                <div className="relative  w-10/12 my-auto mx-auto py-4 z-50 border-radius-8 top-0 bottom-0 left-0 right-0">
                    <div className="my-auto">
                            <div className="relative my-auto" >
                                <img src={imagePreview} alt="" className=" my-auto" style={{ objectFit: "cover" }} />

                            </div>
                    </div>
                </div>
            </div>
        )}

        <TopBar />

      {/* <div className="flex sm:mx-4 mx-2 sm:gap-3 gap-1 absolute mt-4 right-4 bg-white shadow px-2 py-1 rounded-full" style={{zIndex:9}}>
        
        <button className="my-auto  h-icon-menu">
          <img className="h-full my-auto" src="/assets/emoji-icon.svg" />
        </button>
      </div> */}
        <div className="mt-10 text-left w-11/12 mx-auto">
            <p className="font14-res-300 text-gray-600">Postingan</p>
        </div>
        <div>
             <textarea
                 className="w-full px-4 pt-4 pb-8 outline-none border-b -mb-2"
                 rows={4}
                 placeholder="Tulis postingan"
                 onKeyUp={e => setContent(e.target.value)}
             ></textarea>
        </div>
      <div className="">
          {imagePreview ?  (
              <div className="relative" style={{ height:"200px"}}>
              <img src={imagePreview} alt="" className="w-11/12 h-full my-4 mx-auto border-radius-20 " style={{ objectFit: "cover" }} />
                      <button onClick={toggleDropdownFullScreen} className="mx-auto absolute z-50 top-0 bottom-0 left-0 right-0 my-auto" style={{ width:"28" , height:"28"}}>
                              <img className="mx-auto my-auto" src={"/assets/icon-fullscreen-purple.svg"} style={{ width:"28px" , height:"28px"}}/>
                      </button>
                  </div>
          ): (
              <div>
              </div>
          )}

      </div>
      <div>
        {imagePreview ?  (
          <div
            className="border-t flex py-3 items-center text-left px-3 hover:bg-red-50 cursor-pointer"
            onClick={(e) => setImagePreview(null)}
          >
            <h6 className="text-xs text-red-600">Hapus Gambar</h6>
          </div>
        ): (
            <div>
            </div>
        )}
          <div className="mt-4 text-left w-11/12 mx-auto">
              <p className="font14-res-300 text-gray-600">Postingan</p>
          </div>
        <div className="border-b flex py-3 items-center text-left px-3 hover:bg-gray-50">

          <div className="mr-2">
            <img className="h-7" src="/assets/image-icon.svg" />
          </div>
          <h6 className="text-xs text-gray-600">Tambahkan Gambar</h6>
          <input
            type="file"
            onChange={(e) => handleImageChange(e)}
            itemType="png.jpg,jpeg"
            className="absolute w-full left-0 opacity-0 cursor-pointer"
          />
        </div>
        <h5 className="text-left px-4 mt-4">Pengaturan Feed</h5>
        <div className="flex justify-between p-4 items-center">
          <p className="text-sm">Simpan di arsip</p>
          <label className="switch">
            <input type="checkbox" className="" checked={isArchive} onChange={handleToggle} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <BottomBar storeFeed={storeFeed} isLoading={isLoading} />
    </>
  );
};
