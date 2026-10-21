/*
  COURSE LIST FOR THE TRAINING EVALUATION PAGE (/evaluation)

  Every evaluation asks the same general questions about the training, the
  facilitator, and whether people would recommend it. The "What you learned"
  section changes by course and comes from this list.

  TO ADD A COURSE
  1. Copy the example block below and paste it inside the list.
  2. id: a short name with lowercase letters and hyphens, like "board-governance".
     This goes in the link, so keep it short and do not change it once in use.
  3. title: the course name as participants should see it.
  4. outcomes: 4 to 8 statements a participant can agree or disagree with,
     usually starting with "I understand", "I can", or "I feel prepared to".
  5. Save, publish the site, and share this link (or a QR code of it):
     https://thescanlandgroup.com/evaluation?course=YOUR-ID
     Add &session=Group%20Name to tag responses for a specific group.

  Example block:
  {
    id: "course-id",
    title: "Course Title",
    outcomes: [
      "I understand ...",
      "I can ..."
    ]
  },

  A link with no course, or a course that is not on this list, still works:
  participants pick their training from a menu, and anyone who chooses
  "Other training" gets the general questions only.
*/

window.TSG_COURSES = [
  {
    id: "strategic-decision-making",
    title: "Strategic Decision Making",
    outcomes: [
      "I understand the difference between strategic and operational decision making.",
      "I understand the major steps in the strategic decision-making process.",
      "I can identify common biases that affect organizational decisions.",
      "I can use a decision matrix to evaluate alternatives.",
      "I better understand how to evaluate risk and organizational capacity.",
      "I feel better prepared to participate in strategic organizational decisions.",
      "The case study helped me apply the concepts presented."
    ]
  }
];
