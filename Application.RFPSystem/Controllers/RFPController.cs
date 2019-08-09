using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.RulesSetup;
using Applications.Operations;
using Common.DataObjects;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Application.RFPSystem.Controllers
{
    [Route("api/V1/[controller]")]
    [ApiController]
    public class RFPController : ControllerBase
    {

        [HttpPost]
        public async Task<IActionResult> CreateRequest(ProposalDataModel proposalDataModel)
        {

            using (IAsyncValidations asyncValidations = new ValdiateRules())
            {
                using (Task<ValidateResponse> validateResponse = asyncValidations.ValidateProposalUser(proposalDataModel.proposalUsers))
                {
                    if(validateResponse.Result.NoErrors)
                    {
                        return validateResponse.Result.controllerBase.Result;
                    }
                    else
                    {
                        return Ok("Proposal Request Submitted");
                    }
                }
            }
        }

    }
}