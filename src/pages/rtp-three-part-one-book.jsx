import { useRef, useState } from "react";
import "../assets/css/bootstrap.min.css";

const RTPThreePartOneBook = () => {
  const images = [
    "/images/rtp-three-part-one/rtp-3-part-1_page-0001.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0002.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0003.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0004.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0005.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0006.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0007.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0008.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0009.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0010.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0011.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0012.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0013.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0014.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0015.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0016.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0017.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0018.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0019.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0020.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0021.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0022.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0023.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0024.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0025.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0026.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0027.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0028.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0029.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0030.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0031.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0032.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0033.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0034.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0035.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0036.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0037.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0038.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0039.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0040.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0041.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0042.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0043.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0044.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0045.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0046.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0047.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0048.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0049.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0050.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0051.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0052.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0053.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0054.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0055.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0056.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0057.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0058.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0059.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0060.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0061.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0062.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0063.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0064.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0065.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0066.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0067.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0068.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0069.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0070.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0071.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0072.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0073.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0074.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0075.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0076.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0077.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0078.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0079.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0080.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0081.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0082.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0083.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0084.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0085.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0086.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0087.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0088.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0089.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0090.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0091.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0092.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0093.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0094.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0095.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0096.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0097.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0098.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0099.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0100.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0101.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0102.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0103.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0104.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0105.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0106.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0107.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0108.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0109.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0110.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0111.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0112.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0113.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0114.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0115.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0116.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0117.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0118.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0119.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0120.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0121.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0122.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0123.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0124.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0125.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0126.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0127.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0128.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0129.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0130.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0131.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0132.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0133.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0134.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0135.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0136.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0137.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0138.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0139.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0140.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0141.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0142.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0143.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0144.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0145.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0146.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0147.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0148.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0149.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0150.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0151.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0152.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0153.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0154.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0155.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0156.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0157.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0158.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0159.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0160.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0161.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0162.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0163.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0164.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0165.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0166.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0167.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0168.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0169.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0170.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0171.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0172.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0173.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0174.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0175.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0176.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0177.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0178.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0179.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0180.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0181.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0182.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0183.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0184.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0185.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0186.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0187.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0188.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0189.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0190.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0191.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0192.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0193.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0194.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0195.webp",
    "/images/rtp-three-part-one/rtp-3-part-1_page-0196.webp",
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
              RTP 3.0 - Clinical Diets Part : 1
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

export default RTPThreePartOneBook;
