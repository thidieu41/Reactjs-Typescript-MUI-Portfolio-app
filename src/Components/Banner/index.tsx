import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";

const contactList = [
  {
    title: "Email",
    content: "theresa@gmail.com",
  },
  {
    title: "Phone",
    content: "0336528613",
  },
  {
    title: "Location",
    content: "Thanh Khe - Da Nang",
  },
];

const Banner = () => {

  const handleContact = () =>{
    window.open('mailto:theresa@gmail.com');
  }
  
  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            m: "auto",
          }}
        >
          <Stack spacing={1}>
            <Typography variant="h4">Hi There!</Typography>
            <Typography variant="h4">I am Front End Developer</Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontStyle: "italic",
              }}
            >
              I make the complex simple
            </Typography>
          </Stack>

          <Button
            variant="outlined"
            sx={{
              mt: 3,
            }}
            onClick={handleContact}
          >
            Contact me
          </Button>
          <Stack direction={"row"} spacing={3} sx={{ mt: 5 }}>
            {contactList.map((item, index) => (
              <>
                <Box>
                  <Typography
                    sx={{
                      color: "#1E4167",
                      fontWeight:500,
                      fontSize:13
                    }}

                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.content}</Typography>
                </Box>
                {index + 1 !== contactList.length && (
                  <Divider orientation="vertical" variant="middle" flexItem />
                )}
              </>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <img
            src="/assets/images/welcom.png"
            alt="developer"
            style={{
              float: "right",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
