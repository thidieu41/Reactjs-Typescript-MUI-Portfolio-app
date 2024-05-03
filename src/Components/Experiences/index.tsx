import {
  Stack,
  Typography,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

const listProject = [
  {
    companyName: "Wowz",
    time: "Jul 2020 - Oct 2020",
    taskList: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
    framwork: ["Javascript - HTML - CSS - Wordpress"],
  },
  {
    companyName: "Laidon",
    time: "Apr 2022 - Aug 2022",
    taskList: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
    framwork: ["SAP - ABAP"],
  },
  {
    companyName: "Digital Fortress",
    time: "Aug 2022 - Aug 2023",
    taskList: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
    framwork: [
      "Reactjs - Typescript - Nextjs - MUI - Tailwind CSS - React Native",
    ],
  },
  {
    companyName: "IPTP Network",
    time: "Aug 2023 - Now",
    taskList: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
    framwork: ["HTML - CSS - Javascript - Jquery - Angular"],
  },
];

const Experience = () => {
  return (
    <Stack>
      <Stack>
        <Typography
          variant="h6"
          sx={{
            color: "#F9A21B",
            fontWeight: 600,
          }}
        >
          Work Experiences
        </Typography>
        <Typography
          variant="body2"
          sx={{
            lineHeight: 2,
            mt: 1,
          }}
        >
          When I studied at PNV. I had 2 internships at{" "}
          <span
            style={{
              color: "#1E4167",
              fontWeight: 600,
            }}
          >
            {" "}
            WOWZ
          </span>{" "}
          and{" "}
          <span
            style={{
              color: "#1E4167",
              fontWeight: 600,
            }}
          >
            Laidon
          </span>
          . After having some knowledge about Front end Developer. I worked on{" "}
          <span
            style={{
              color: "#1E4167",
              fontWeight: 600,
            }}
          >
            Digital Fortress
          </span>{" "}
          and{" "}
          <span
            style={{
              color: "#1E4167",
              fontWeight: 600,
            }}
          >
            IPTP Networks
          </span>
          . In short, I have been involved in several projects before.
        </Typography>
      </Stack>

      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {listProject.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot variant="outlined">
                <AssignmentOutlinedIcon
                  sx={{
                    color: "#1E4167",
                  }}
                />
              </TimelineDot>
              {index !== listProject.length - 1 && (
                <TimelineConnector
                  sx={{
                    backgroundColor: "#1E4167",
                  }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent>
              <Stack
                direction={"row"}
                spacing={3}
                sx={
                  {
                    //   justifyContent: "space-between",
                  }
                }
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  {item.companyName} Company
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontStyle: "italic",
                    color: "#1E4167",
                  }}
                >
                  {item.time}
                </Typography>
              </Stack>
              <Stack spacing={1}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "gray",
                    fontWeight: 700,
                  }}
                >
                  {item.framwork}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    lineHeight: 2,
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </Stack>

              {/* <List>
                <Grid container>
                  {item.taskList.map((task) => (
                    <Grid item xs={6}>
                      <ListItem
                        sx={{
                          p: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: "30px",
                          }}
                        >
                          <RadioButtonUncheckedIcon
                            fontSize="small"
                            sx={{
                              maxHeight: 12,
                              color: "#1E4167",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography
                            sx={{
                              fontSize: "14px",
                              fontWeight: 300,
                              lineHeight: 2,
                            }}
                          >
                            {task}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </Grid>
                  ))}
                </Grid>
              </List> */}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Stack>
  );
};

export default Experience;
