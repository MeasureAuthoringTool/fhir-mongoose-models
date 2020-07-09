const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DeviceMetricCalibrationSchema } = require('./allSchemaHeaders.js');
const { DeviceMetricCategorySchema } = require('./allSchemaHeaders.js');
const { DeviceMetricColorSchema } = require('./allSchemaHeaders.js');
const { DeviceMetricOperationalStatusSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { DeviceMetricSchema } = require('./allSchemaHeaders.js');

DeviceMetricSchema.add(DomainResourceSchema);
DeviceMetricSchema.remove('id');
DeviceMetricSchema.add({
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
});

module.exports.DeviceMetricSchema = DeviceMetricSchema;
