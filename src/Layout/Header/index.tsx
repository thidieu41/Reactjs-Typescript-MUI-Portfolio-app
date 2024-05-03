import { Button, Stack, Typography } from "@mui/material";
import GamepadIcon from "@mui/icons-material/Gamepad";

export const menuList = [
  {
    name: "About me",
    url: 400,
  },
  {
    name: "My Skills",
    url: 950,
  },
  {
    name: "Experience",
    url: 1500,
  },
];

const Header = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        marginTop: 0,
        position: "fixed",
        height: "60px",
        backgroundColor: "white",
        width:'95%',
        zIndex:100
      }}
    >
      <Stack
        direction={"row"}
        spacing={1}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        sx={{
          cursor: "pointer",
          alignItems:'center'
        }}
      >
        <GamepadIcon
          sx={{
            color: "#1E4167",
          }}
        />
        <Typography
          sx={{
            color: "#1E4167",
            fontWeight: 600,
          }}
        >
          PORTFOLIO
        </Typography>
      </Stack>
      <Stack direction={"row"} spacing={3}>
        {menuList.map((menu) => (
          <Button
            sx={{
              textTransform: "uppercase",
              fontWeight: 600,
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
    </Stack>
  );
};

export default Header;
