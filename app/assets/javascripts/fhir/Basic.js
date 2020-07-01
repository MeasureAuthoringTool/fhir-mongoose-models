const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { ReferenceSchema } = require('./Reference');

const BasicSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  code: CodeableConceptSchema,
  subject: ReferenceSchema,
  created: PrimitiveDateSchema,
  author: ReferenceSchema,
  typeName: { type: String, default: 'Basic' },
  _type: { type: String, default: 'FHIR::Basic' },
});

class Basic extends mongoose.Document {
  constructor(object) {
    super(object, BasicSchema);
    this.typeName = 'Basic';
    this._type = 'FHIR::Basic';
  }
}

module.exports.BasicSchema = BasicSchema;
module.exports.Basic = Basic;
