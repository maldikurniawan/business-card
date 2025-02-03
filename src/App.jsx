import Card from "./components/Card";
import Container from "./components/Container";
import Logo from "/assets/images/logo-erp.png"

export default function Home() {
  return (
    <div className="relative min-h-screen max-[500px]:px-4">
      <div
        className="max-[500px]:w-[87px] max-[500px]:h-[87px] max-[500px]:blur-[75px] w-[299px] h-[299px] bg-[#20B9D4] absolute rounded-full blur-[200px] -z-10 top-0 left-0"
      ></div>
      <div
        className="max-[500px]:w-[87px] max-[500px]:h-[87px] max-[500px]:blur-[75px] max-[500px]:top-[400px] w-[299px] h-[299px] bg-[#20B9D4] absolute rounded-full blur-[200px] -z-10 top-0 right-0"
      ></div>
      <div
        className="max-[500px]:w-[131px] max-[500px]:h-[131px] max-[500px]:blur-[75px] max-[500px]:bottom-[520px] w-[450px] h-[450px] bg-[#AC2477] absolute rounded-full blur-[200px] -z-10 bottom-0 left-0"
      ></div>
      <div
        className="max-[500px]:w-[131px] max-[500px]:h-[131px] max-[500px]:blur-[75px] max-[500px]:bottom-[150px] w-[450px] h-[450px] bg-[#AC2477] absolute rounded-full blur-[200px] -z-10 bottom-0 right-0"
      ></div>
      <div
        className="max-[500px]:w-[131px] max-[500px]:h-[131px] max-[500px]:blur-[75px] w-[451px] h-[451px] bg-[#6BC364] absolute rounded-full blur-[250px] -z-10 top-0 inset-0 mx-auto"
      ></div>
      <div
        className="max-[500px]:hidden w-[451px] h-[451px] bg-[#6BC364] absolute rounded-full blur-[250px] -z-10 bottom-0 max-[500px]:left-0 left-1/2"
      ></div>
      <div className="mx-auto w-full sm:w-[469px] max-[500px]:py-4 py-[70px]">
        <Container icon={<img src={Logo} alt="ERP Logo" />} title={"ERP SKRIP"}>
          <Card>
            <div className="p-[10px]">
              <div className="mx-auto flex justify-center bg-[#D7D7D7] rounded-[24px]">
                <img src="/assets/images/pak-supri.png" alt="Pak Supri" className="mt-8" />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="uppercase font-bold text-[24px] mt-1">Supriyanto</h1>
                <span><img src="/assets/images/verified.svg" alt="Verified" className="mt-2" /></span>
              </div>
              <p className="text-[11px] text-[#808080]">Jln. Alam Flora no 41, Way Halim Permai, Kecamatan Way Halim, Kota Bandar Lampung, Lampung 351335</p>
              <a href="https://api.whatsapp.com/send?phone=6281927262596" target="_blank" className="flex justify-between mt-[26px]">
                <div className="flex">
                  <div className="border p-[8px] rounded-[8px] w-[44px] h-[44px] flex justify-center mr-2">
                    <img src="/assets/images/phone.svg" alt="Phone" />
                  </div>
                  <div>
                    <p className="text-[12px] text-[#525252]">Contact</p>
                    <span className="text-black text-[14px] font-bold">+62 819-2726-2596</span>
                  </div>
                </div>
                <div className="items-center my-auto">
                  <img src="/assets/images/arrow-right.svg" alt="Arrow Right" />
                </div>
              </a>
              <a href="https://erpskrip.id/" target="_blank" className="flex justify-between my-2 mb-4">
                <div className="flex">
                  <div className="border p-[8px] rounded-[8px] w-[44px] h-[44px] flex justify-center mr-2">
                    <img src="/assets/images/www.svg" alt="WWW" />
                  </div>
                  <div>
                    <p className="text-[12px] text-[#525252]">Website</p>
                    <span className="text-black text-[14px] font-bold">erpskrip.id</span>
                  </div>
                </div>
                <div className="items-center my-auto">
                  <img src="/assets/images/arrow-right.svg" alt="Arrow Right" />
                </div>
              </a>
            </div>
          </Card>
          <Card>
            <a href="https://api.whatsapp.com/send?phone=6281927262596" target="_blank" className="py-[18px] px-[64px] text-[14px] text-[#1C1C1C] flex gap-2 justify-center text-center items-center mt-3">
              <img src="/assets/images/whatsapp.svg" alt="Whats APP" />
              <span>What's App</span>
            </a>
          </Card>
          <Card>
            <div className="py-[18px] px-[64px] text-[14px] text-[#1C1C1C] flex gap-2 justify-center text-center items-center mt-3">
              <img src="/assets/images/gmail.svg" alt="G-Mail" />
              <span>G-Mail</span>
            </div>
          </Card>
        </Container>
      </div>
    </div>
  )
}