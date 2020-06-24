const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GroupMeasureSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'GroupMeasure' },
});

class GroupMeasure extends mongoose.Document {
  constructor(object) {
    super(object, GroupMeasureSchema);
    this._type = 'FHIR::GroupMeasure';
  }
};


module.exports.GroupMeasureSchema = GroupMeasureSchema;
module.exports.GroupMeasure = GroupMeasure;
