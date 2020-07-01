const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { EndpointStatusSchema } = require('./EndpointStatus');
const { IdentifierSchema } = require('./Identifier');
const { MimeTypeSchema } = require('./MimeType');
const { PeriodSchema } = require('./Period');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUrlSchema } = require('./PrimitiveUrl');
const { ReferenceSchema } = require('./Reference');

const EndpointSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: EndpointStatusSchema,
  connectionType: CodingSchema,
  name: PrimitiveStringSchema,
  managingOrganization: ReferenceSchema,
  contact: [ContactPointSchema],
  period: PeriodSchema,
  payloadType: [CodeableConceptSchema],
  payloadMimeType: [MimeTypeSchema],
  address: PrimitiveUrlSchema,
  header: [PrimitiveStringSchema],
  typeName: { type: String, default: 'Endpoint' },
  _type: { type: String, default: 'FHIR::Endpoint' },
});

class Endpoint extends mongoose.Document {
  constructor(object) {
    super(object, EndpointSchema);
    this.typeName = 'Endpoint';
    this._type = 'FHIR::Endpoint';
  }
}

module.exports.EndpointSchema = EndpointSchema;
module.exports.Endpoint = Endpoint;
