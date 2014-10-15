using MBBVL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace MBBVL.Controllers.Sequencing {
    public class SequenceController : ApiController {
        // GET api/<controller>
        public IEnumerable<string> Get() {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id) {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post(SequencingWrapperModel model) {
        }

        [HttpPost]
        [ResponseType(typeof(SequenceController))]
        [Route("CreateEmail")]
        public IHttpActionResult CreateEmail(SequencingWrapperModel model) {
            return Ok("");
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value) {
        }

        // DELETE api/<controller>/5
        public void Delete(int id) {
        }
    }
}