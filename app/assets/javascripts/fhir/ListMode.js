const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ListModeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ListMode' },
});

class ListMode extends mongoose.Document {
  constructor(object) {
    super(object, ListModeSchema);
    this._type = 'FHIR::ListMode';
  }
};


module.exports.ListModeSchema = ListModeSchema;
module.exports.ListMode = ListMode;
