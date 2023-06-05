import { useEffect, useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Header } from "components";
import { tokens } from "theme";
import {
  useTheme,
  Modal,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
} from "@mui/material";
import { MainWrapper } from "./styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  borderRadius: "4px",
  p: 2,
};

const Calendar = ({ isSidebarCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const [width, setWidth] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const customWidth = isSidebarCollapsed
        ? `${window.innerWidth - 130}px`
        : `${window.innerWidth - 320}px`;
      setWidth(customWidth);
    };

    // Calculate initial width when page loads
    handleResize();

    // Calculate width when window size changes
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarCollapsed]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEventTitle, setNewEventTitle] = useState("");

  const handleDateClick = (selected) => {
    setSelectedEvent(selected);
    setIsOpen(true);
  };

  const handleEventClick = (selected) => {
    setSelectedEvent(selected);
    setIsOpen(true);
  };

  const handleTitleChange = (event) => {
    setNewEventTitle(event.target.value);
  };

  const handleConfirmation = () => {
    if (selectedEvent.event) {
      selectedEvent.event.remove();
    } else {
      const calendarApi = selectedEvent.view.calendar;
      calendarApi.unselect();

      if (newEventTitle) {
        calendarApi.addEvent({
          id: `${selectedEvent.dateStr}-${newEventTitle}`,
          title: newEventTitle,
          start: selectedEvent.startStr,
          end: selectedEvent.endStr,
          allDay: selectedEvent.allDay,
        });
      }
    }

    setIsOpen(false);
    setNewEventTitle("");
  };

  const handleCancellation = () => {
    setIsOpen(false);
    setNewEventTitle("");
  };

  return (
    <>
      <MainWrapper>
        <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
        <Box
          display="flex"
          sx={{
            flexDirection: { xs: "column", lg: "row" },
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            backgroundColor={colors.primary[400]}
            p={1}
            sx={{
              flex: "1",
              minWidth: "0",
              maxHeight: "78vh",
              overflow: "auto",
              mr: { xs: 0, lg: 1 },
              mb: { xs: 1, lg: 0 },
            }}
          >
            <Typography variant="h5" color={colors.primary[100]}>
              Events
            </Typography>
            <List>
              {currentEvents.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.blueAccent[100],
                    color: colors.gray[100],
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            sx={{
              width: width,
              flex: "0 0 65vw",
            }}
            p={1}
            backgroundColor={colors.primary[400]}
            color={colors.primary[100]}
          >
            <FullCalendar
              height="75vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={[
                {
                  id: "12315",
                  title: "All-day event",
                  date: "2023-06-11",
                },
                {
                  id: "5123",
                  title: "Timed event",
                  date: "2023-07-28",
                },
              ]}
            />
          </Box>
        </Box>
      </MainWrapper>
      <Modal open={isOpen} onClose={handleCancellation}>
        <Box
          sx={style}
          color={colors.primary[100]}
          bgcolor={colors.primary[400]}
        >
          {selectedEvent && selectedEvent.event ? (
            <Box overflow="auto">
              <Typography variant="h5">
                Do you want to delete this event?
              </Typography>
              <Typography variant="h4" px={2} py={4}>
                {selectedEvent.event.title}
              </Typography>
              <Box display="flex" justifyContent="flex-end" pt={2}>
                <Button
                  variant="contained"
                  onClick={handleCancellation}
                  sx={{
                    backgroundColor: `${colors.primary[900]}`,
                    color: `${colors.primary[100]}`,
                    marginRight: "5px",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={handleConfirmation}
                  sx={{
                    backgroundColor: `${colors.primary[900]}`,
                    color: `${colors.primary[100]}`,
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          ) : (
            <Box overflow="auto">
              <Typography variant="h5">
                Please enter a new title for your event
              </Typography>
              <Box pt={2} pb={4}>
                <TextField
                  variant="outlined"
                  label="Add Event"
                  multiline
                  rows={2}
                  fullWidth
                  value={newEventTitle}
                  onChange={handleTitleChange}
                  sx={{
                    "& label.Mui-focused": {
                      color: `${colors.primary[200]}`,
                    },
                  }}
                />
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  onClick={handleCancellation}
                  sx={{
                    backgroundColor: `${colors.primary[900]}`,
                    color: `${colors.primary[100]}`,
                    marginRight: "5px",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={handleConfirmation}
                  sx={{
                    backgroundColor: `${colors.primary[900]}`,
                    color: `${colors.primary[100]}`,
                  }}
                >
                  Add
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Calendar;
