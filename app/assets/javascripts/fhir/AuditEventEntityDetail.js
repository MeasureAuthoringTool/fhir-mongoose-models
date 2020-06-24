const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AuditEventEntityDetailSchema = BackboneElementSchemaFunction({
   type : String,
   valueString : String,
   valueBase64Binary : String,
   fhirTitle: { type: String, default: 'AuditEventEntityDetail' },
});

class AuditEventEntityDetail extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventEntityDetailSchema);
    this._type = 'FHIR::AuditEventEntityDetail';
  }
};


module.exports.AuditEventEntityDetailSchema = AuditEventEntityDetailSchema;
module.exports.AuditEventEntityDetail = AuditEventEntityDetail;
