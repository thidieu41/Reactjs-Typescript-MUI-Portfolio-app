import { Grid, LinearProgress, Stack, Typography } from "@mui/material";

const hardSkills = [
  {
    name: "HTML - CSS - JS",
    range: 70,
  },
  {
    name: "Reactjs",
    range: 80,
  },
  {
    name: "Nextjs",
    range: 60,
  },
  {
    name: "Jquery",
    range: 80,
  },
  {
    name: "MUI",
    range: 75,
  },
  {
    name: "Tailwind CSS",
    range: 70,
  },
];
const softSkills = [
  {
    name: "Team work",
    range: 95,
  },
  {
    name: "Time management",
    range: 80,
  },
  {
    name: "Comnunication",
    range: 95,
  },
  {
    name: "English",
    range: 55,
  },
];

const Skills = () => {
  return (
    <Grid container>
     
      <Grid
        item
        xs={6}
        sx={{
          m: "auto",
        }}
      >
        <Stack spacing={1}>
        <Typography
          sx={{
            color: "#F9A21B",
            fontWeight: 500,
          }}
        >
          Some skill I got during working from before company
        </Typography>
        <Typography variant="body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Typography>
        </Stack>
       
        <Grid container spacing={3} sx={{mt:2}}>
          <Grid item xs={6}>
            {hardSkills.map((skill) => (
              <Stack
                sx={{
                  mt: 2,
                }}
                spacing={1}
              >
                <Typography variant="body2">{skill.name}</Typography>
                <LinearProgress
                  variant="determinate"
                  value={skill.range}
                  sx={{
                    height: 6,
                    backgroundColor:'#F6A31E'
                  }}
                />
              </Stack>
            ))}
          </Grid>
          <Grid item xs={6}>
            {softSkills.map((skill) => (
              <Stack
                sx={{
                  mt: 2,
                }}
                spacing={1}
              >
                <Typography>{skill.name}</Typography>
                <LinearProgress
                  variant="determinate"
                  value={skill.range}
                  sx={{
                    height: 6,
                    backgroundColor:'#F6A31E'
                  }}
                />
              </Stack>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <img
          src="https://i.pinimg.com/564x/56/2e/97/562e97e2215837931e9853bf5d4145cc.jpg"
          alt="skill"
        />
      </Grid>
    </Grid>
  );
};

export default Skills;
