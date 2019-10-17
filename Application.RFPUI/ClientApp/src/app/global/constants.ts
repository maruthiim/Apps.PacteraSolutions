export const NavbarMenu = [
  {
    path: 'dashboard',
    title: 'Dashboard',
    class: 'glyphicon-stats'
  },
  {
    path: 'newProposal',
    title: 'New Proposal',
    class: 'glyphicon-copy'
  },
  {
    path: 'proposals',
    title: 'Proposals',
    class: 'glyphicon-list-alt'
  },
  {
    path: 'administration',
    title: 'Administration',
    class: 'glyphicon-wrench'
  }
];

export const UserData =
{
  userId: 'P0145011',
  userName: 'Aravindu Gattu',
  userEmail: 'aravindu.gattu@pactera.com',
  lastLoggedIn: '19-0902019 21:34 PM',
  role: 'SalesLead',
  token: 'XDRTYIE$RTTYIDLEO'
};

export const Roles = [
  {
    roleId: 1,
    roleName: 'SalesLead'
  },
  {
    roleId: 2,
    roleName: 'PursuitLead'
  },
  {
    roleId: 3,
    roleName: 'PracticeLead'
  },
  {
    roleId: 4,
    roleName: 'DeliveryLead'
  }
]

export const RequestTypes = [
  {
    requestTypeId: 1,
    requestTypeName: 'Project'
  },
  {
    requestTypeId: 2,
    requestTypeName: 'Resource'
  }
]

export const RFPSampleData =
  {
    "RFPUser": null,
    "RFPCode": "UPS_MS_",
    "status": "New",
    "requestType": "1",
    "customer": "Customer",
    "location": "Location",
    "requestedDate": "2019-10-16T18:30:00.000Z",
    "title": "Title",
    "scope": "Scope",
    "description": "Desc",
    "additionalInformation": "No",
    "schedule": [
      {
        "milestone": "A",
        "scheduleStartDate": "2019-10-16T18:30:00.000Z",
        "scheduleEndDate": "2019-10-17T18:30:00.000Z",
        "remarks": "A"
      },
      {
        "milestone": "B",
        "scheduleStartDate": "2019-10-17T18:30:00.000Z",
        "scheduleEndDate": "2019-10-17T18:30:00.000Z",
        "remarks": "B"
      }
    ],
    "questionnaire": [
      {
        "questionnaireArea": "A",
        "questions": [
          {
            "question": "A",
            "answer": "A"
          },
          {
            "question": "A",
            "answer": "A"
          }
        ]
      },
      {
        "questionnaireArea": "B",
        "questions": [
          {
            "question": "B",
            "answer": "B"
          }
        ]
      }
    ]
  }
;


