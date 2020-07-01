const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MeasureReportGroupSchema } = require('./MeasureReportGroup');
const { MeasureReportStatusSchema } = require('./MeasureReportStatus');
const { MeasureReportTypeSchema } = require('./MeasureReportType');
const { PeriodSchema } = require('./Period');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const MeasureReportSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: MeasureReportStatusSchema,
  type: MeasureReportTypeSchema,
  measure: PrimitiveCanonicalSchema,
  subject: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  reporter: ReferenceSchema,
  period: PeriodSchema,
  improvementNotation: CodeableConceptSchema,
  group: [MeasureReportGroupSchema],
  evaluatedResource: [ReferenceSchema],
  typeName: { type: String, default: 'MeasureReport' },
  _type: { type: String, default: 'FHIR::MeasureReport' },
});

class MeasureReport extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportSchema);
    this.typeName = 'MeasureReport';
    this._type = 'FHIR::MeasureReport';
  }
}

module.exports.MeasureReportSchema = MeasureReportSchema;
module.exports.MeasureReport = MeasureReport;
