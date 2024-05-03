import { Box, Stack } from "@mui/material";
import "./style.css";

const listFramework = [
  {
    url: "https://i.pinimg.com/564x/0e/7d/4a/0e7d4ad55cdc3db527af6c3d72f41ad0.jpg",
    name: "HTML",
  },
  {
    url: "https://i.pinimg.com/564x/5d/1c/c8/5d1cc864ae7eebae63a1c5738b446e3d.jpg",
    name: "CSS",
  },
  {
    url: "https://i.pinimg.com/564x/37/fc/63/37fc630b338d68d18b5fe5fde855562e.jpg",
    name: "JS",
  },
  {
    url: "https://i.pinimg.com/564x/10/d0/94/10d09404c5d16a0c6760965d41feb960.jpg",
    name: "Reactjs",
  },
  {
    url: "https://www.svgrepo.com/show/374144/typescript.svg",
    name: "TS",
  },
  {
    url: "https://i.pinimg.com/564x/d3/63/16/d36316f698adbdbfc571566fe0724ff1.jpg",
    name: "Angular",
  },
  {
    url: "https://i.pinimg.com/736x/32/9a/d8/329ad85f4ab2047cae13d582274f9270.jpg",
    name: "Nextjs",
  },
  {
    url: "https://i.pinimg.com/564x/79/34/1a/79341a3711675ce0674911d2561dac7a.jpg",
    name: "Jquery",
  },
  {
    url: "https://i.pinimg.com/564x/92/2a/54/922a549da523ef2309cf1c3a5c524c16.jpg",
    name: "MUI",
  },
  {
    url: "https://i.pinimg.com/564x/5e/42/c9/5e42c926feb229f934d3089d89c26e2f.jpg",
    name: "Tailwind css",
  },
  {
    url: "https://i.pinimg.com/474x/e3/f9/f5/e3f9f5f051fc851aef94bc91b9f0f5b1.jpg",
    name: "Nodejs",
  },
  {
    url: "https://i.pinimg.com/564x/cf/5f/7d/cf5f7dca8d30d52a39f4043f3796d7f0.jpg",
    name: "Github",
  },
  {
    url: "https://i.pinimg.com/564x/26/fc/06/26fc068f90186033ddb5856983e07894.jpg",
    name: "Gitlab",
  },
  {
    url: "https://i.pinimg.com/564x/e6/14/c9/e614c9b6141ed54626adb2bdd0fbcaf8.jpg",
    name: "Express js",
  },
];

const Languages = () => {
  return (
    // <Stack sx={{
    //     display:'flex',
    //     alignItems:'center',
    //     justifyContentl:'center',
    //     height:'30vh'
    // }}>
    //   <div className="slider">
    //     <div className="slide-track">
    //       {listFramework.map((item, index) => (
    //         <div className="slide" key={index}>
    //           <img
    //             src={item.url}
    //             height="100"
    //             width="250"
    //             alt=""
    //             style={{
    //               objectFit: "scale-down",
    //             }}
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </Stack>

    <div className="slider">
      <div className="slide-track">
      {listFramework.map((item, index) => (
            <div className="slide" key={index}>
              <img
                src={item.url}
                height="100"
                width="250"
                alt=""
              />
            </div>
          ))}
      
      </div>
    </div>
  );
};

export default Languages;
