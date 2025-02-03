import Card from "./components/Card";
import Container from "./components/Container";
import Logo from "/assets/images/logo-erp.png"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div
        className="w-[299px] h-[299px] bg-[#20B9D4] absolute rounded-full blur-[250px] -z-10 top-0 left-0"
      ></div>
      <div
        className="w-[299px] h-[299px] bg-[#20B9D4] absolute rounded-full blur-[250px] -z-10 top-0 right-0"
      ></div>
      <div
        className="w-[450px] h-[450px] bg-[#AC2477] absolute rounded-full blur-[250px] -z-10 bottom-0 left-0"
      ></div>
      <div
        className="w-[450px] h-[450px] bg-[#AC2477] absolute rounded-full blur-[250px] -z-10 bottom-0 right-0"
      ></div>
      <div
        className="w-[451px] h-[451px] bg-[#6BC364] absolute rounded-full blur-[250px] -z-10 top-0 right-1/2"
      ></div>
      <div
        className="w-[451px] h-[451px] bg-[#6BC364] absolute rounded-full blur-[250px] -z-10 bottom-0 left-1/2"
      ></div>
      <div className="mx-auto w-[469px] py-[70px]">
        <Container icon={<img src={Logo} alt="ERP Logo" />} title={"ERP SKRIP"}>
          <Card>
            <div className="p-[10px]">
              <div className="mx-auto flex justify-center bg-[#D7D7D7] rounded-[24px]">
                <img src="/assets/images/pak-supri.png" alt="Pak Supri" className="mt-8"/>
              </div>
            </div>
          </Card>
        </Container>
      </div>
    </div>
  )
}