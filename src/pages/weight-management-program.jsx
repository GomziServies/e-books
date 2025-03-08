import { useRef, useState } from "react";
import "../assets/css/bootstrap.min.css";

const WMPBook = () => {
  const images = [
    "/images/wmp/weight-management-program_page-0001.webp",
    "/images/wmp/weight-management-program_page-0002.webp",
    "/images/wmp/weight-management-program_page-0003.webp",
    "/images/wmp/weight-management-program_page-0004.webp",
    "/images/wmp/weight-management-program_page-0005.webp",
    "/images/wmp/weight-management-program_page-0006.webp",
    "/images/wmp/weight-management-program_page-0007.webp",
    "/images/wmp/weight-management-program_page-0008.webp",
    "/images/wmp/weight-management-program_page-0009.webp",
    "/images/wmp/weight-management-program_page-0010.webp",
    "/images/wmp/weight-management-program_page-0011.webp",
    "/images/wmp/weight-management-program_page-0012.webp",
    "/images/wmp/weight-management-program_page-0013.webp",
    "/images/wmp/weight-management-program_page-0014.webp",
    "/images/wmp/weight-management-program_page-0015.webp",
    "/images/wmp/weight-management-program_page-0016.webp",
    "/images/wmp/weight-management-program_page-0017.webp",
    "/images/wmp/weight-management-program_page-0018.webp",
    "/images/wmp/weight-management-program_page-0019.webp",
    "/images/wmp/weight-management-program_page-0020.webp",
    "/images/wmp/weight-management-program_page-0021.webp",
    "/images/wmp/weight-management-program_page-0022.webp",
    "/images/wmp/weight-management-program_page-0023.webp",
    "/images/wmp/weight-management-program_page-0024.webp",
    "/images/wmp/weight-management-program_page-0025.webp",
    "/images/wmp/weight-management-program_page-0026.webp",
    "/images/wmp/weight-management-program_page-0027.webp",
    "/images/wmp/weight-management-program_page-0028.webp",
    "/images/wmp/weight-management-program_page-0029.webp",
    "/images/wmp/weight-management-program_page-0030.webp",
    "/images/wmp/weight-management-program_page-0031.webp",
    "/images/wmp/weight-management-program_page-0032.webp",
    "/images/wmp/weight-management-program_page-0033.webp",
    "/images/wmp/weight-management-program_page-0034.webp",
    "/images/wmp/weight-management-program_page-0035.webp",
    "/images/wmp/weight-management-program_page-0036.webp",
    "/images/wmp/weight-management-program_page-0037.webp",
    "/images/wmp/weight-management-program_page-0038.webp",
    "/images/wmp/weight-management-program_page-0039.webp",
    "/images/wmp/weight-management-program_page-0040.webp",
    "/images/wmp/weight-management-program_page-0041.webp",
    "/images/wmp/weight-management-program_page-0042.webp",
    "/images/wmp/weight-management-program_page-0043.webp",
    "/images/wmp/weight-management-program_page-0044.webp",
    "/images/wmp/weight-management-program_page-0045.webp",
    "/images/wmp/weight-management-program_page-0046.webp",
    "/images/wmp/weight-management-program_page-0047.webp",
    "/images/wmp/weight-management-program_page-0048.webp",
    "/images/wmp/weight-management-program_page-0049.webp",
    "/images/wmp/weight-management-program_page-0050.webp",
    "/images/wmp/weight-management-program_page-0051.webp",
    "/images/wmp/weight-management-program_page-0052.webp",
    "/images/wmp/weight-management-program_page-0053.webp",
    "/images/wmp/weight-management-program_page-0054.webp",
    "/images/wmp/weight-management-program_page-0055.webp",
    "/images/wmp/weight-management-program_page-0056.webp",
    "/images/wmp/weight-management-program_page-0057.webp",
    "/images/wmp/weight-management-program_page-0058.webp",
    "/images/wmp/weight-management-program_page-0059.webp",
    "/images/wmp/weight-management-program_page-0060.webp",
    "/images/wmp/weight-management-program_page-0061.webp",
    "/images/wmp/weight-management-program_page-0062.webp",
    "/images/wmp/weight-management-program_page-0063.webp",
    "/images/wmp/weight-management-program_page-0064.webp",
    "/images/wmp/weight-management-program_page-0065.webp",
    "/images/wmp/weight-management-program_page-0066.webp",
    "/images/wmp/weight-management-program_page-0067.webp",
    "/images/wmp/weight-management-program_page-0068.webp",
    "/images/wmp/weight-management-program_page-0069.webp",
    "/images/wmp/weight-management-program_page-0070.webp",
    "/images/wmp/weight-management-program_page-0071.webp",
    "/images/wmp/weight-management-program_page-0072.webp",
    "/images/wmp/weight-management-program_page-0073.webp",
    "/images/wmp/weight-management-program_page-0074.webp",
    "/images/wmp/weight-management-program_page-0075.webp",
    "/images/wmp/weight-management-program_page-0076.webp",
    "/images/wmp/weight-management-program_page-0077.webp",
    "/images/wmp/weight-management-program_page-0078.webp",
    "/images/wmp/weight-management-program_page-0079.webp",
    "/images/wmp/weight-management-program_page-0080.webp",
    "/images/wmp/weight-management-program_page-0081.webp",
    "/images/wmp/weight-management-program_page-0082.webp",
    "/images/wmp/weight-management-program_page-0083.webp",
    "/images/wmp/weight-management-program_page-0084.webp",
    "/images/wmp/weight-management-program_page-0085.webp",
    "/images/wmp/weight-management-program_page-0086.webp",
    "/images/wmp/weight-management-program_page-0087.webp",
    "/images/wmp/weight-management-program_page-0088.webp",
    "/images/wmp/weight-management-program_page-0089.webp",
    "/images/wmp/weight-management-program_page-0090.webp",
    "/images/wmp/weight-management-program_page-0091.webp",
    "/images/wmp/weight-management-program_page-0092.webp",
    "/images/wmp/weight-management-program_page-0093.webp",
    "/images/wmp/weight-management-program_page-0094.webp",
    "/images/wmp/weight-management-program_page-0095.webp",
    "/images/wmp/weight-management-program_page-0096.webp",
    "/images/wmp/weight-management-program_page-0097.webp",
    "/images/wmp/weight-management-program_page-0098.webp",
    "/images/wmp/weight-management-program_page-0099.webp",
    "/images/wmp/weight-management-program_page-0100.webp",
    "/images/wmp/weight-management-program_page-0101.webp",
    "/images/wmp/weight-management-program_page-0102.webp",
    "/images/wmp/weight-management-program_page-0103.webp",
    "/images/wmp/weight-management-program_page-0104.webp",
    "/images/wmp/weight-management-program_page-0105.webp",
    "/images/wmp/weight-management-program_page-0106.webp",
    "/images/wmp/weight-management-program_page-0107.webp",
    "/images/wmp/weight-management-program_page-0108.webp",
    "/images/wmp/weight-management-program_page-0109.webp",
    "/images/wmp/weight-management-program_page-0110.webp",
    "/images/wmp/weight-management-program_page-0111.webp",
    "/images/wmp/weight-management-program_page-0112.webp",
    "/images/wmp/weight-management-program_page-0113.webp",
    "/images/wmp/weight-management-program_page-0114.webp",
    "/images/wmp/weight-management-program_page-0115.webp",
    "/images/wmp/weight-management-program_page-0116.webp",
    "/images/wmp/weight-management-program_page-0117.webp",
    "/images/wmp/weight-management-program_page-0118.webp",
    "/images/wmp/weight-management-program_page-0119.webp",
    "/images/wmp/weight-management-program_page-0120.webp",
    "/images/wmp/weight-management-program_page-0121.webp",
    "/images/wmp/weight-management-program_page-0122.webp",
    "/images/wmp/weight-management-program_page-0123.webp",
    "/images/wmp/weight-management-program_page-0124.webp",
    "/images/wmp/weight-management-program_page-0125.webp",
    "/images/wmp/weight-management-program_page-0126.webp",
    "/images/wmp/weight-management-program_page-0127.webp",
    "/images/wmp/weight-management-program_page-0128.webp",
    "/images/wmp/weight-management-program_page-0129.webp",
    "/images/wmp/weight-management-program_page-0130.webp",
    "/images/wmp/weight-management-program_page-0131.webp",
    "/images/wmp/weight-management-program_page-0132.webp",
    "/images/wmp/weight-management-program_page-0133.webp",
    "/images/wmp/weight-management-program_page-0134.webp",
    "/images/wmp/weight-management-program_page-0135.webp",
    "/images/wmp/weight-management-program_page-0136.webp",
    "/images/wmp/weight-management-program_page-0137.webp",
    "/images/wmp/weight-management-program_page-0138.webp",
    "/images/wmp/weight-management-program_page-0139.webp",
    "/images/wmp/weight-management-program_page-0140.webp",
    "/images/wmp/weight-management-program_page-0141.webp",
    "/images/wmp/weight-management-program_page-0142.webp",
    "/images/wmp/weight-management-program_page-0143.webp",
    "/images/wmp/weight-management-program_page-0144.webp",
    "/images/wmp/weight-management-program_page-0145.webp",
    "/images/wmp/weight-management-program_page-0146.webp",
    "/images/wmp/weight-management-program_page-0147.webp",
    "/images/wmp/weight-management-program_page-0148.webp",
    "/images/wmp/weight-management-program_page-0149.webp",
    "/images/wmp/weight-management-program_page-0150.webp",
    "/images/wmp/weight-management-program_page-0151.webp",
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
              Weight Management Program
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

export default WMPBook;
