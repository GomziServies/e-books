import { useRef, useState } from "react";
import "../assets/css/bootstrap.min.css";

const AASBook = () => {
  const images = [
    "/images/aas/anabolic-androgenic-steroids_page-0001.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0002.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0003.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0004.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0005.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0006.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0007.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0008.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0009.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0010.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0011.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0012.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0013.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0014.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0015.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0016.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0017.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0018.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0019.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0020.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0021.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0022.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0023.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0024.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0025.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0026.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0027.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0028.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0029.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0030.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0031.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0032.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0033.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0034.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0035.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0036.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0037.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0038.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0039.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0040.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0041.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0042.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0043.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0044.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0045.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0046.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0047.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0048.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0049.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0050.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0051.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0052.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0053.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0054.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0055.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0056.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0057.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0058.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0059.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0060.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0061.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0062.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0063.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0064.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0065.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0066.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0067.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0068.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0069.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0070.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0071.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0072.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0073.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0074.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0075.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0076.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0077.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0078.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0079.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0080.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0081.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0082.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0083.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0084.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0085.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0086.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0087.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0088.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0089.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0090.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0091.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0092.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0093.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0094.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0095.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0096.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0097.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0098.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0099.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0100.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0101.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0102.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0103.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0104.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0105.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0106.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0107.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0108.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0109.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0110.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0111.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0112.webp",
    "/images/aas/anabolic-androgenic-steroids_page-0113.webp",
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
              Anabolic Androgenic Steroids
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

export default AASBook;
