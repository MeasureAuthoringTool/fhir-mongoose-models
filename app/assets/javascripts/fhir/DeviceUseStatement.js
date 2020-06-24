const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DeviceUseStatementStatusSchema } = require('./DeviceUseStatementStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { TimingSchema } = require('./Timing');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceUseStatementSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   basedOn : [ReferenceSchema],
   status : DeviceUseStatementStatusSchema,
   subject : ReferenceSchema,
   derivedFrom : [ReferenceSchema],
   timingTiming : TimingSchema,
   timingPeriod : PeriodSchema,
   timingDateTime : DateTime,
   recordedOn : DateTime,
   source : ReferenceSchema,
   device : ReferenceSchema,
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   bodySite : CodeableConceptSchema,
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'DeviceUseStatement' },
});

class DeviceUseStatement extends mongoose.Document {
  constructor(object) {
    super(object, DeviceUseStatementSchema);
    this._type = 'FHIR::DeviceUseStatement';
  }
};


module.exports.DeviceUseStatementSchema = DeviceUseStatementSchema;
module.exports.DeviceUseStatement = DeviceUseStatement;
