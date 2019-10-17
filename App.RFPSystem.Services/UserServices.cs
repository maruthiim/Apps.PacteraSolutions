using Applications.Operations;
using Common.DataObjects;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace App.RFPSystem.Services
{
    public class UserServices : ISyncRFPUsersInformation
    {
        public void Dispose()
        {
            //throw new NotImplementedException();
        }

        public async Task<IEnumerable<RFPUsersInformation>> rFPUsersInformation()
        {
            IList<RFPUsersInformation> rFPUsersInformation =
                new List<RFPUsersInformation>
                {
                    new RFPUsersInformation { Id=1, AccessKey = "QWERTYUIOP",Environment="Sandbox",userName="Narayana@pactera.com",Role="DeliveryTeamLead"  },
                    new RFPUsersInformation { Id=2, AccessKey = "ASDFGHJKL",Environment="Sandbox",userName="Sreekanth@pactera.com", Role = "PracticeLead" },
                    new RFPUsersInformation { Id=3, AccessKey = "LKJHGFDSA",Environment="Sandbox",userName="Sashi@pactera.com" , Role="DeliveryTeamLead"},
                    new RFPUsersInformation { Id=4, AccessKey = "POIUYTREWQ",Environment="Sandbox",userName="Phani@pactera.com" , Role="PracticeLead"},
                    new RFPUsersInformation { Id=5, AccessKey = "#EDCXSW@",Environment="Sandbox",userName="Thomson@pactera.com" , Role="SalesLead"},
                    new RFPUsersInformation { Id=6, AccessKey = "!QAZ@WSX",Environment="Sandbox",userName="maruthi@pactera.com" , Role="PursuitTeamLead"},
                    new RFPUsersInformation { Id=6, AccessKey = "ZAQ!XSW@",Environment="Sandbox",userName="Aravind.Gattu@pactera.com" , Role="PursuitTeamLead"}
                };


            return await Task.Run(() => rFPUsersInformation);
        }
    }
}
