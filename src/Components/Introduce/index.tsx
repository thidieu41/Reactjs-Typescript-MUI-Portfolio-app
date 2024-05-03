import { Button, Divider, Grid, Link, Stack, Typography } from "@mui/material";

const Introduce = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <img
          src="https://i.pinimg.com/564x/8d/0e/e0/8d0ee0b342f5d7c2307ca7c24cb744b5.jpg"
          alt="introduce"
        />
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          m: "auto",
        }}
      >
        <Stack spacing={2}>
          <Typography
            sx={{
              color: "#F9A21B",
              fontWeight: 500,
            }}
          >
            Who am I ?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
            }}
          >
            I'm Trubel Theresa, as a web developer and wanna be a full stask
            developer!
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 300,
              lineHeight: 2,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Divider />
        </Stack>
        <Stack spacing={2} sx={{ mt: 3 }}>
          <Typography variant="subtitle2">
            I graduted from{" "}
            <Link
              style={{
                fontWeight: 700,
                color: "#1E4167",
              }}
              underline="none"
              href=""
            >
              Passereslles Numeriques VietNam
            </Link>
          </Typography>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "gray",
              }}
            >
              GPA : 3.2
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "gray",
                fontStyle: "italic",
              }}
            >
              2019 - 2022
            </Typography>
          </Stack>
          <Button sx={{ maxWidth: 200 }} variant="outlined">
            Download CV - CL
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Introduce;
