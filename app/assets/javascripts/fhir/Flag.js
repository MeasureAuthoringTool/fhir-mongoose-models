const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { FlagStatusSchema } = require('./FlagStatus');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');

const FlagSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: FlagStatusSchema,
  category: [CodeableConceptSchema],
  code: CodeableConceptSchema,
  subject: ReferenceSchema,
  period: PeriodSchema,
  encounter: ReferenceSchema,
  author: ReferenceSchema,
  typeName: { type: String, default: 'Flag' },
  _type: { type: String, default: 'FHIR::Flag' },
});

class Flag extends mongoose.Document {
  constructor(object) {
    super(object, FlagSchema);
    this.typeName = 'Flag';
    this._type = 'FHIR::Flag';
  }
}

module.exports.FlagSchema = FlagSchema;
module.exports.Flag = Flag;
