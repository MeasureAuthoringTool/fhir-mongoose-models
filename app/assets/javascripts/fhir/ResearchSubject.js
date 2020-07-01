const mongoose = require('mongoose/browser');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { ResearchSubjectStatusSchema } = require('./ResearchSubjectStatus');

const ResearchSubjectSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: ResearchSubjectStatusSchema,
  period: PeriodSchema,
  study: ReferenceSchema,
  individual: ReferenceSchema,
  assignedArm: PrimitiveStringSchema,
  actualArm: PrimitiveStringSchema,
  consent: ReferenceSchema,
  typeName: { type: String, default: 'ResearchSubject' },
  _type: { type: String, default: 'FHIR::ResearchSubject' },
});

class ResearchSubject extends mongoose.Document {
  constructor(object) {
    super(object, ResearchSubjectSchema);
    this.typeName = 'ResearchSubject';
    this._type = 'FHIR::ResearchSubject';
  }
}

module.exports.ResearchSubjectSchema = ResearchSubjectSchema;
module.exports.ResearchSubject = ResearchSubject;
