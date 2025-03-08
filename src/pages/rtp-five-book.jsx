import { useRef, useState } from "react";
import "../assets/css/bootstrap.min.css";

const RTPFiveBook = () => {
  const images = [
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0001.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0002.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0003.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0004.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0005.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0006.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0007.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0008.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0009.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0010.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0011.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0012.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0013.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0014.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0015.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0016.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0017.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0018.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0019.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0020.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0021.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0022.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0023.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0024.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0025.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0026.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0027.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0028.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0029.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0030.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0031.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0032.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0033.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0034.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0035.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0036.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0037.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0038.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0039.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0040.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0041.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0042.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0043.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0044.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0045.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0046.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0047.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0048.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0049.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0050.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0051.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0052.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0053.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0054.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0055.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0056.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0057.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0058.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0059.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0060.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0061.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0062.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0063.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0064.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0065.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0066.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0067.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0068.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0069.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0070.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0071.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0072.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0073.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0074.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0075.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0076.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0077.jpg",
    "/images/rtp-5/FILE-RTP-50-Prep-Coaching-Program-f3d25dae-13d2-4372-a7cd-0c26e213e0df_page-0078.jpg",
  ];
  const imageRefs = useRef([]);
  const [inputValue, setInputValue] = useState("1");

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setInputValue("");
      return;
    }

    const page = parseInt(value, 10);
    if (!isNaN(page) && page >= 1 && page <= images.length) {
      setInputValue(value);

      imageRefs.current[page - 1]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="bg-pdf-gray">
      <div className="pdf-container">
        <div className="pdf-toolbar">
          <div className="pdf-header ps-4">
            <h4 className="text-white text-md-start text-center">
              RTP-50: Prep and Coaching Program
            </h4>
          </div>
          <div>
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
            />
            <span className="mx-2">/</span>
            <span>{images.length}</span>
          </div>
        </div>
        <div className="pdf-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Page ${index + 1}`}
              ref={(el) => (imageRefs.current[index] = el)}
              className="page-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RTPFiveBook;
