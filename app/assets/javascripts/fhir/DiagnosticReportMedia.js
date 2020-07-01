const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const DiagnosticReportMediaSchema = BackboneElementSchemaFunction({
  comment: PrimitiveStringSchema,
  link: ReferenceSchema,
  typeName: { type: String, default: 'DiagnosticReportMedia' },
  _type: { type: String, default: 'FHIR::DiagnosticReportMedia' },
});

class DiagnosticReportMedia extends mongoose.Document {
  constructor(object) {
    super(object, DiagnosticReportMediaSchema);
    this.typeName = 'DiagnosticReportMedia';
    this._type = 'FHIR::DiagnosticReportMedia';
  }
}

module.exports.DiagnosticReportMediaSchema = DiagnosticReportMediaSchema;
module.exports.DiagnosticReportMedia = DiagnosticReportMedia;
