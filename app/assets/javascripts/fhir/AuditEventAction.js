const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AuditEventActionSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'AuditEventAction' },
});

class AuditEventAction extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventActionSchema);
    this._type = 'FHIR::AuditEventAction';
  }
};


module.exports.AuditEventActionSchema = AuditEventActionSchema;
module.exports.AuditEventAction = AuditEventAction;
