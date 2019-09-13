using System;
using System.Collections.Generic;

namespace Common.DataObjects
{
    public class ProposalDataModel
    {
       public ProposalRequestType proposalRequestType { get; set; }
       public ProposalUsers proposalUsers { get; set; }
    }

    public class Schedule
    {
        public int scheduleID { get; set; }
        public string milestone { get; set; }
        public DateTime scheduleStartDate { get; set; }
        public DateTime scheduleEndDate { get; set; }
        public string remarks { get; set; }
    }

    public class Document2
    {
    }

    public class Document
    {
        public int documentId { get; set; }
        public string documentName { get; set; }
        public string documentExt { get; set; }
        public string documentType { get; set; }
        public Document2 document { get; set; }
    }

    public class Question
    {
        public int questionID { get; set; }
        public string question { get; set; }
        public string answer { get; set; }
    }

    public class Questionnaire
    {
        public int questionnaireID { get; set; }
        public string questionnaireArea { get; set; }
        public List<Question> questions { get; set; }
    }

    public class RootObject
    {
        public int RFPID { get; set; }
        public int RFPCode { get; set; }
        public int status { get; set; }
        public string requestType { get; set; }
        public string customer { get; set; }
        public string location { get; set; }
        public DateTime requestedDate { get; set; }
        public string title { get; set; }
        public string scope { get; set; }
        public string description { get; set; }
        public string additionalInformation { get; set; }
        public List<Schedule> schedule { get; set; }
        public List<Document> documents { get; set; }
        public List<Questionnaire> questionnaire { get; set; }
    }

}
