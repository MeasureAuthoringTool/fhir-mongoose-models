const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { EndpointStatusSchema } = require('./EndpointStatus');
const { IdentifierSchema } = require('./Identifier');
const { MimeTypeSchema } = require('./MimeType');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EndpointSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : EndpointStatusSchema,
   connectionType : CodingSchema,
   name : String,
   managingOrganization : ReferenceSchema,
   contact : [ContactPointSchema],
   period : PeriodSchema,
   payloadType : [CodeableConceptSchema],
   payloadMimeType : [MimeTypeSchema],
   address : String,
   header : [String],
   fhirTitle: { type: String, default: 'Endpoint' },
});

class Endpoint extends mongoose.Document {
  constructor(object) {
    super(object, EndpointSchema);
    this._type = 'FHIR::Endpoint';
  }
};


module.exports.EndpointSchema = EndpointSchema;
module.exports.Endpoint = Endpoint;
