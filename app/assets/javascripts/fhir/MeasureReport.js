const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MeasureReportGroupSchema } = require('./MeasureReportGroup');
const { MeasureReportStatusSchema } = require('./MeasureReportStatus');
const { MeasureReportTypeSchema } = require('./MeasureReportType');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MeasureReportSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : MeasureReportStatusSchema,
   type : MeasureReportTypeSchema,
   measure : String,
   subject : ReferenceSchema,
   date : DateTime,
   reporter : ReferenceSchema,
   period : PeriodSchema,
   improvementNotation : CodeableConceptSchema,
   group : [MeasureReportGroupSchema],
   evaluatedResource : [ReferenceSchema],
   fhirTitle: { type: String, default: 'MeasureReport' },
});

class MeasureReport extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportSchema);
    this._type = 'FHIR::MeasureReport';
  }
};


module.exports.MeasureReportSchema = MeasureReportSchema;
module.exports.MeasureReport = MeasureReport;
