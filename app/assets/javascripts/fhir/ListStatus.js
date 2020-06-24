const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ListStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ListStatus' },
});

class ListStatus extends mongoose.Document {
  constructor(object) {
    super(object, ListStatusSchema);
    this._type = 'FHIR::ListStatus';
  }
};


module.exports.ListStatusSchema = ListStatusSchema;
module.exports.ListStatus = ListStatus;
