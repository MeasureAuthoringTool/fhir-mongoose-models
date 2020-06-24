const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DeviceMetricCalibrationSchema } = require('./DeviceMetricCalibration');
const { DeviceMetricCategorySchema } = require('./DeviceMetricCategory');
const { DeviceMetricColorSchema } = require('./DeviceMetricColor');
const { DeviceMetricOperationalStatusSchema } = require('./DeviceMetricOperationalStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { TimingSchema } = require('./Timing');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceMetricSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   type : CodeableConceptSchema,
   unit : CodeableConceptSchema,
   source : ReferenceSchema,
   parent : ReferenceSchema,
   operationalStatus : DeviceMetricOperationalStatusSchema,
   color : DeviceMetricColorSchema,
   category : DeviceMetricCategorySchema,
   measurementPeriod : TimingSchema,
   calibration : [DeviceMetricCalibrationSchema],
   fhirTitle: { type: String, default: 'DeviceMetric' },
});

class DeviceMetric extends mongoose.Document {
  constructor(object) {
    super(object, DeviceMetricSchema);
    this._type = 'FHIR::DeviceMetric';
  }
};


module.exports.DeviceMetricSchema = DeviceMetricSchema;
module.exports.DeviceMetric = DeviceMetric;
