import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography } from '@mui/material';

const sampleStatus = [
  { time: '10:00', status: 'ON' },
  { time: '11:15', status: 'OFF' },
  { time: '12:10', status: 'ON' },
  { time: '14:00', status: 'OFF' },
];

const TimelineStatus = ({ machine }) => {
  return (
    <Timeline>
      {sampleStatus.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color={event.status === 'ON' ? 'success' : 'error'} />
            {index < sampleStatus.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body1">{event.status}</Typography>
            <Typography variant="caption">{event.time}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineStatus;
