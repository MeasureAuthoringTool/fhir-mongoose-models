const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DeviceUseStatementStatusSchema } = require('./DeviceUseStatementStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');
const { TimingSchema } = require('./Timing');

const DeviceUseStatementSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  basedOn: [ReferenceSchema],
  status: DeviceUseStatementStatusSchema,
  subject: ReferenceSchema,
  derivedFrom: [ReferenceSchema],
  timingTiming: TimingSchema,
  timingPeriod: PeriodSchema,
  timingDateTime: PrimitiveDateTimeSchema,
  recordedOn: PrimitiveDateTimeSchema,
  source: ReferenceSchema,
  device: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  bodySite: CodeableConceptSchema,
  note: [AnnotationSchema],
  typeName: { type: String, default: 'DeviceUseStatement' },
  _type: { type: String, default: 'FHIR::DeviceUseStatement' },
});

class DeviceUseStatement extends mongoose.Document {
  constructor(object) {
    super(object, DeviceUseStatementSchema);
    this.typeName = 'DeviceUseStatement';
    this._type = 'FHIR::DeviceUseStatement';
  }
}

module.exports.DeviceUseStatementSchema = DeviceUseStatementSchema;
module.exports.DeviceUseStatement = DeviceUseStatement;
