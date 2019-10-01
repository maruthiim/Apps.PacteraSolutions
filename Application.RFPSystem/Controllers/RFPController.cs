using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Threading.Tasks;
using Application.RulesSetup;
using Applications.Operations;
using Common.DataObjects;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using Newtonsoft.Json;
//using System.Web.Mvc;

namespace Application.RFPSystem.Controllers
{
    //[Route("api/V1/[controller]")]
    [ApiController]
    public class RFPController : ControllerBase
    {


        [Route("api/V1/Data")]
        [HttpPost]
        public async Task<IActionResult> CreateRequest([FromForm]IList<IFormFile> excelFileName)
        {
            string str = Request.Form["Sample"];
            string str2 = Request.Form["Sample2"];
            return Ok("Data Received " + str + " " + str2);
        }


        

        [Route("CreateProposal")]
        [HttpPost]
        public async Task<IActionResult> CreateRequestM([FromForm]RFPRequestDataModel proposalDataModel)
        {
            try
            {

                RFPRequestDataModel rFPRequestDataModel =
                    JsonConvert.DeserializeObject<RFPRequestDataModel>(Request.Form["proposalData"]);


                var ConnectionString = "mongodb://10.130.4.144:27017";

                var client = new MongoClient(ConnectionString);
                var db = client.GetDatabase("local");

               // db.CreateCollection("RFPRequestCollection");

                var col = db.GetCollection<BsonDocument>("RFPRequestCollection");

                var doc = BsonDocument.Create(rFPRequestDataModel).ToBsonDocument();


                await col.InsertOneAsync(doc);

                return Ok("Document Inserted");
            }
            catch(Exception ex)
            {
                return Ok(ex);
            }

            //    var obje = Request.Form.Files;

                

            //    var objKeys = Request.Form.Keys.ToList();

            //    Dictionary<string, object> dict = new Dictionary<string, object>();

                

            //    var json = JsonConvert.SerializeObject(objKeys);

            //    using (IAsyncValidations asyncValidations = new ValdiateRules())
            //    {
            //        using (Task<ValidateResponse> validateResponse = asyncValidations.ValidateProposalUser(proposalDataModel.proposalUsers))
            //        {
            //            if (validateResponse.Result.NoErrors)
            //            {
            //                return validateResponse.Result.controllerBase.Result;
            //            }
            //            else
            //            {
            //                return Ok("Proposal Request Submitted");
            //            }
            //        }
            //    }
            //}
            //catch(Exception ex)
            //{
            //    return Ok(ex);
            //}
        }

    }
}