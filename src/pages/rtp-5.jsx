import "../assets/css/bootstrap.min.css";

const RTP5 = () => {
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

    return (
        <div className="container-fluid">
            <div className="container p-0">
                <div className="space-y-2 h-screen">
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Image ${index + 1}`} className="w-100" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RTP5;
