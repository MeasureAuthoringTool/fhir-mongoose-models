const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GroupTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'GroupType' },
});

class GroupType extends mongoose.Document {
  constructor(object) {
    super(object, GroupTypeSchema);
    this._type = 'FHIR::GroupType';
  }
};


module.exports.GroupTypeSchema = GroupTypeSchema;
module.exports.GroupType = GroupType;
