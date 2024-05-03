import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import GamepadIcon from "@mui/icons-material/Gamepad";
import { menuList } from "../Header";

const socialList = [
  {
    imgUrl: "/assets/images/social/phone.svg",
    link: "0362911617",
    name: "phone",
  },
  {
    imgUrl: "/assets/images/social/gmail.svg",
    link: "thidieu040421@gmail.com",
    name: "gmail",
  },
  {
    imgUrl: "/assets/images/social/facebook.svg",
    link: "https://www.facebook.com/lYin.Trubel",
    name: "facebook",
  },
  {
    imgUrl: "/assets/images/social/skype.svg",
    link: "",
    name: "skype",
  },
  {
    imgUrl: "/assets/images/social/telegram.svg",
    link: "https://t.me/trubeltheresa",
    name: "telegram",
  },
];

const Footer = () => {
  const handleOpenSocial = (url: string, type: string) => {
    if (type === "phone") {
      window.open(`tel:${url}`, "_blank");
    } else if (type === "gmail") {
      window.open(`mailto:${url}`, "_blank");
    } else {
      window.open(url, "_blank");
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: "#1E4167",
        // height: 40,
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
          spacing={1}
        >
          <GamepadIcon
            sx={{
              color: "white",
            }}
          />
          <Typography
            sx={{
              color: "white",
              fontWeight: 600,
            }}
            variant="body2"
          >
            TRUBEL THERESA
          </Typography>
        </Stack>

        <Stack direction={"row"} spacing={3}>
          {menuList.map((menu) => (
            <Button
              sx={{
                textTransform: "uppercase",
                fontWeight: 600,
                color: "white",
              }}
              onClick={() =>
                window.scrollTo({
                  top: menu.url,
                  behavior: "smooth",
                })
              }
            >
              {menu.name}
            </Button>
          ))}
        </Stack>

        <Stack direction={"row"} spacing={2}>
          {socialList.map((item) => (
            <img
              src={item.imgUrl}
              alt={item.name}
              style={{
                height: 30,
                width: 30,
                cursor: "pointer",
              }}
              onClick={() => handleOpenSocial(item.link, item.name)}
            />
          ))}
        </Stack>
      </Stack>
      <Stack sx={{pb:2}}>
      <Divider sx={{
        backgroundColor:'gray',
        my:2
      }}/>
      <Typography sx={{
        textAlign:'center',
        color:'white',
      }}
      variant="caption">
        {new Date().getFullYear()} - @trubeltheresa
      </Typography>
      </Stack>
      
    </Box>
  );
};

export default Footer;
