const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DeviceMetricCalibrationSchema } = require('./DeviceMetricCalibration');
const { DeviceMetricCategorySchema } = require('./DeviceMetricCategory');
const { DeviceMetricColorSchema } = require('./DeviceMetricColor');
const { DeviceMetricOperationalStatusSchema } = require('./DeviceMetricOperationalStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { TimingSchema } = require('./Timing');

const DeviceMetricSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  type: CodeableConceptSchema,
  unit: CodeableConceptSchema,
  source: ReferenceSchema,
  parent: ReferenceSchema,
  operationalStatus: DeviceMetricOperationalStatusSchema,
  color: DeviceMetricColorSchema,
  category: DeviceMetricCategorySchema,
  measurementPeriod: TimingSchema,
  calibration: [DeviceMetricCalibrationSchema],
  typeName: { type: String, default: 'DeviceMetric' },
  _type: { type: String, default: 'FHIR::DeviceMetric' },
});

class DeviceMetric extends mongoose.Document {
  constructor(object) {
    super(object, DeviceMetricSchema);
    this.typeName = 'DeviceMetric';
    this._type = 'FHIR::DeviceMetric';
  }
}

module.exports.DeviceMetricSchema = DeviceMetricSchema;
module.exports.DeviceMetric = DeviceMetric;
