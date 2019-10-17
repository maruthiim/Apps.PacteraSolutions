using Common.DataObjects;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Operations
{
    public interface ISyncRFPUsersInformation:IDisposable
    {
        Task<IEnumerable<RFPUsersInformation>> rFPUsersInformation();
    }
}
